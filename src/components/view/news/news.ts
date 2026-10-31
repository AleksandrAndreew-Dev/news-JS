import './news.css';
import { Article } from '../../../types/news-api';

class News {
    private getEl<T extends Element>(root: ParentNode, selector: string): T {
        const el = root.querySelector<T>(selector);
        if (!el) {
            throw new Error(`Element not found: ${selector}`);
        }
        return el;
    }

    draw(data: Article[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
        if (!newsItemTemp) {
            throw new Error('Template #newsItemTemp not found');
        }

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) this.getEl(newsClone, '.news__item').classList.add('alt');

            this.getEl<HTMLElement>(newsClone, '.news__meta-photo').style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            this.getEl(newsClone, '.news__meta-author').textContent = item.author || item.source.name;
            this.getEl(newsClone, '.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            this.getEl(newsClone, '.news__description-title').textContent = item.title;
            this.getEl(newsClone, '.news__description-source').textContent = item.source.name;
            this.getEl(newsClone, '.news__description-content').textContent = item.description;
            this.getEl(newsClone, '.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const container = this.getEl<HTMLElement>(document, '.news');
        container.innerHTML = '';
        container.appendChild(fragment);
    }
}

export default News;
