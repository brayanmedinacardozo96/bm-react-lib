import { Page } from './page';

export interface OpenNoFrameProps extends Page {
    name: string;
    path: string;
    element: React.ReactElement;
}
