/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 更多环境变量...
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
