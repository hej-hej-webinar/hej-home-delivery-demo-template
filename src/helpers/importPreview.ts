import { exec } from "node:child_process";

export function previewImportPattern(pattern: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(`printf '${pattern}' | tr ',' '\n'`, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(stderr || error.message));
        return;
      }

      resolve(stdout.trim());
    });
  });
}