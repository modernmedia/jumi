'use strict';

module.exports = class Jumi {
    /**
     * Accepts a JSON object and returns a HTML string.
     *
     * @param  Object JSON Object
     * @return String HTML
     */
    static jsonToHtml(json) {
        let _json = json;
        let _this = this;
        const VOIDELEMENTS = [
            'area',
            'base',
            'br',
            'col',
            'embed',
            'hr',
            'img',
            'input',
            'keygen',
            'link',
            'meta',
            'param',
            'source',
            'track',
            'wbr'
        ];
        let html = '';

        json.forEach(function(item) {
            if ( ! item.tag) {
                throw new Error('One of the items in the object does not have a tag name.');
            }

            let item_html = '<' + item.tag;
            let children = '';
            let item_attr = false;

            Object.keys(item).forEach(function(key) {
                switch(key) {
                    case 'tag':
                        // We already have tag
                        break;

                    case 'children':
                        children += _this.jsonToHtml(item.children);
                        break;

                    case 'contents':
                        // We do this later.
                        break;

                    default:
                        if ( ! item_attr) {
                            item_html += ' ';
                            item_attr = true;
                        }

                        if (item[key]) {
                            item_html += key + '=' + "'" + item[key] + "' ";
                        } else {
                            item_html += key;
                        }
                }
            });

            item_html = item_html.trim();

            item_html += '>';

            if (VOIDELEMENTS.indexOf(item.tag) === -1) {
                if (item.contents) {
                    item_html += item.contents;
                }

                if (children) {
                    item_html += children;
                }

                item_html += '</' + item.tag + '>';
            }

            html += item_html;
        });

        return html;
    }
}
