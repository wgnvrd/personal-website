export interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
  isActive: boolean;
}

export interface Metadata {
  lastUpdated: string;
  version: string;
}

export interface SampleData {
  items: Item[];
  metadata: Metadata;
} 