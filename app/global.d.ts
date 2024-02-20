import {} from 'hono'

type Head = {
  title?: string
}

type Goal = {
  GoalId: number;
  GoalName: string;
}

declare module 'hono' {
  interface Env {
    Variables: {
      PROD: boolean;
    }
    Bindings: {
      MY_D1_DB: D1Database;
    }
  }
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head): Response | Promise<Response>
  }
}
