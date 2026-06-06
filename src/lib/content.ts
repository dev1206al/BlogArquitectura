import { readFileSync } from "node:fs";
import { join } from "node:path";

export type GlossaryItem = {
  term: string;
  definition: string;
};

export type BibliographyGroups = {
  libros: string[];
  articulos: string[];
  normas: string[];
  sitios: string[];
};

export const readPublicText = (fileName: string) =>
  readFileSync(join(process.cwd(), "public", fileName), "utf-8");

export const parseGlossary = (content: string): GlossaryItem[] =>
  content
    .replace(/^GLOSARIO\s*/i, "")
    .split(/\n\s*\n/)
    .map((block) => {
      const term = block.match(/Termino:\s*(.+)/i)?.[1]?.trim();
      const definition = block.match(/Definición:\s*([\s\S]+)/i)?.[1]?.trim();
      return term && definition ? { term, definition } : null;
    })
    .filter((item): item is GlossaryItem => Boolean(item));

export const parseReferences = (content: string): string[] =>
  content
    .replace(/^REFERENCIAS\s*/i, "")
    .split(/\n\s*\n/)
    .map((reference) => reference.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);

export const groupReferences = (references: string[]): BibliographyGroups => {
  const groups: BibliographyGroups = {
    libros: [],
    articulos: [],
    normas: [],
    sitios: [],
  };

  references.forEach((reference) => {
    const normalized = reference.toLowerCase();
    const isNorm =
      /\b(ley|reglamento|código|codigo|arancel|normatividad|bitácora electrónica|besop|trámite|tramite|factura electrónica)\b/.test(
        normalized,
      ) || normalized.includes("cámara de diputados");
    const isArticle =
      /\b(revista|dialnet|artículo|articulo|informe|guía|guia|metodología|metodologia)\b/.test(
        normalized,
      );
    const isSite = normalized.includes("https://") || normalized.includes("http://");

    if (isNorm) {
      groups.normas.push(reference);
    } else if (isArticle) {
      groups.articulos.push(reference);
    } else if (isSite) {
      groups.sitios.push(reference);
    } else {
      groups.libros.push(reference);
    }
  });

  return groups;
};
