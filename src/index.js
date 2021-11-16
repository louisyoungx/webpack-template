import './assets/css/style.css';
import Print from './assets/js/print';
import Icon from './assets/img/icon.png';
import Info from './data/info.csv';

function main() {
  Print('start create')

  const element = document.createElement('div');
  element.setAttribute('class', 'hello')
  element.innerText = 'Hello World'

  const img = document.createElement('img');
  img.setAttribute('src', Icon)

  const data = document.createElement('div')
  Print(Info)
  data.innerText = Info

  document.body.appendChild(element);
  document.body.appendChild(img);
  document.body.appendChild(data);
  
  Print('over')
}

main()