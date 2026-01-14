
export interface FAQNode {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  steps?: string[];
  options?: FAQNode[];
  isAIBackup?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
