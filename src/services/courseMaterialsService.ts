import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import {
  COURSE_MATERIALS,
  COURSE_MATERIAL_PASSWORD_ENV,
} from "../constants/courseMaterials";
import type { CourseMaterialId } from "../types";

const PRIVATE_DOWNLOADS_DIR = "private-downloads/archimate";

export interface CourseMaterialFile {
  stream: ReadableStream;
  sizeInBytes: number;
  downloadName: string;
}

const hashForComparison = (value: string) =>
  crypto.createHash("sha256").update(value).digest();

export function isCourseMaterialDownloadConfigured(): boolean {
  return Boolean(process.env[COURSE_MATERIAL_PASSWORD_ENV]);
}

export function isCourseMaterialPasswordValid(candidate: string): boolean {
  const expected = process.env[COURSE_MATERIAL_PASSWORD_ENV];
  if (!expected) {
    return false;
  }
  return crypto.timingSafeEqual(
    hashForComparison(candidate),
    hashForComparison(expected),
  );
}

export async function openCourseMaterial(
  id: CourseMaterialId,
): Promise<CourseMaterialFile> {
  const { fileName } = COURSE_MATERIALS[id];
  const filePath = path.resolve(process.cwd(), PRIVATE_DOWNLOADS_DIR, fileName);
  const { size } = await fs.promises.stat(filePath);
  return {
    stream: Readable.toWeb(fs.createReadStream(filePath)) as ReadableStream,
    sizeInBytes: size,
    downloadName: fileName,
  };
}
