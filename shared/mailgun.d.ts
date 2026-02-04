export declare const createLogger: (source: string) => (level: 'info' | 'warn' | 'error', message: string, meta?: Record<string, any>) => void;

export declare const toSafeEmail: (email: string) => string | null;

export declare const buildQuizEmail: ({
  name,
  score,
  total,
  passed,
  detailed,
  questions,
  answers
}: {
  name: string;
  score: number;
  total: number;
  passed: boolean;
  detailed?: boolean;
  questions?: any[];
  answers?: Record<number, number>;
}) => {
  subject: string;
  text: string;
};

export declare const sendQuizResultsEmail: ({
  to,
  name,
  score,
  total,
  passed,
  detailed,
  questions,
  answers,
  requestId,
  log,
  env
}: {
  to: string;
  name: string;
  score: number;
  total: number;
  passed: boolean;
  detailed?: boolean;
  questions?: any[];
  answers?: Record<number, number>;
  requestId: string;
  log: ReturnType<typeof createLogger>;
  env?: Record<string, string | undefined>;
}) => Promise<any>;
