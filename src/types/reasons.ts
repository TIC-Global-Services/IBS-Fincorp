export interface Reason {
  title: string;
  description: string;
  image: string;
}

export interface ReasonWithIndex extends Reason {
  originalIndex: number;
}

export interface SwipeCardProps {
  reason: Reason;
  isTop: boolean;
  index: number;
  totalCards: number;
  setCards: React.Dispatch<React.SetStateAction<ReasonWithIndex[]>>;
  originalIndex: number;
}

export interface Review {
  text: string;
  initial: string;
  name: string;
  role: string;
  image: string;
}
