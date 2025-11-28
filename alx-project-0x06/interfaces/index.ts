// Button Component Props
export interface ButtonProps{
    buttonLabel: string;
    buttonSize?: string;
    buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
    action?: () => void;
}
  

//Props for Layout Component

export interface LayoutProps{
    children: React.ReactNode;
}
    
    // Props for page route
    export interface PageRoutProps{
        pageRoute: string;
    }