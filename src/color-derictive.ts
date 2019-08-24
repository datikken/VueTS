import { DirectiveOptions } from 'vue';

const directive: DirectiveOptions = {
    inserted(el, node) {
       el.style.backgroundColor = node.value
    }
}

export default directive