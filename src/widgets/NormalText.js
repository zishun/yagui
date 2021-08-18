import BaseWidget from 'widgets/BaseWidget';

class NormalText extends BaseWidget {

  constructor(name) {
    super();

    this.domText = document.createElement('div');
    this.domText.innerHTML = name || '';
    this.domText.className = 'normal-text';
  }

  setText(text) {
    this.domText.innerHTML = text;
  }

  setVisibility(visible) {
    this.domText.hidden = !visible;
  }
}

export default NormalText;
