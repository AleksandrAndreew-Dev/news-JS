import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import {ArticleResponse, SourcesResponse} from '../../types/news-api'

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (document
           .querySelector('.sources') as HTMLElement)
            .addEventListener('click', (e: MouseEvent | KeyboardEvent) => this.controller.getNews(e, (data: ArticleResponse) => this.view.drawNews(data)));
        this.controller.getSources((data: SourcesResponse) => this.view.drawSources(data));
    }
}

export default App;
