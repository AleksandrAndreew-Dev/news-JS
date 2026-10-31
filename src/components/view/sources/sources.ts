import './sources.css';
import { SourceDetails } from '../../../types/news-api';

class Sources {
    private getEl<T extends Element>(root: ParentNode, selector: string): T {
        const el = root.querySelector<T>(selector);
        if (!el) {
            throw new Error(`Element not found: ${selector}`);
        }
        return el;
    }

    draw(data: Pick<SourceDetails, "id" | "name">[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        if (!sourceItemTemp) {
            throw new Error('Template #sourceItemTemp not found');
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
         


            const sourceContainer = this.getEl<HTMLElement>(sourceClone, '.source__item-name');
            sourceContainer.textContent = item.name;
            const sourceItem = this.getEl<HTMLElement>(sourceClone, '.source__item');
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        this.getEl<HTMLElement>(document, '.sources').append(fragment);
    }
}

export default Sources;
