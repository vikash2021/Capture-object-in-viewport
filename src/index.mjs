import "./styles.css";

// debounced scroll event
// detect html elements that are in viewport

const inViewPortHandler = (elm) => {
    const elmDim = elm.getBoundingClientRect();
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewWidth = window.innerWidth || document.documentElement.clientWidth;
    
    return elmDim.top >= 0 && elmDim.left >= 0 && elmDim.right <= viewWidth && 
    elmDim.bottom <= viewHeight;
  };
  
  const detectInViewport = () => {
    const result = [];
    const blocks = document.querySelectorAll(".blocks");
    blocks.forEach((elm) => {
      if(inViewPortHandler(elm)){
        result.push(elm.textContent);
      }
    });
    console.log(result);
  }
  
  const debounce = (func, delay) => {
    let timer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(context, args), delay);
    };
  };
  
  const debouncedDetect = debounce(detectInViewport, 1000);
  
window.addEventListener('scroll', debouncedDetect, false);

document.getElementById("app").innerHTML = `
<div class="wrapper">
<div class="blocks">Allen Solly</div>
<div class="blocks">Peter England</div>
<div class="blocks">Turtle</div>
<div class="blocks">Tribe</div>
<div class="blocks">Ninja</div>
<div class="blocks">Blackberry</div>
<div class="blocks">Louis Phillipe</div>
<div class="blocks">Louis Vouitton</div>
<div class="blocks">Parks</div>
<div class="blocks">Sparko</div>
<div class="blocks">Arrow</div>
<div class="blocks">Van Huesen</div>
<div class="blocks">Turtle</div>
<div class="blocks">Mufti</div>
<div class="blocks">Monte Carlo</div>
<div class="blocks">Allen Cooper</div>
<div class="blocks">Jack & Jones</div>
<div class="blocks">Lacoste</div>


</div>
`;
