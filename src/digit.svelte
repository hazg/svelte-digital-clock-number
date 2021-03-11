
<script>

  export let digit

  let number = [
    [1, 1, 1, 0, 1, 1, 1], // 0
    [0, 0, 1, 0, 0, 1, 0], // 1
    [1, 0, 1, 1, 1, 0, 1], // 2
    [1, 0, 1, 1, 0, 1, 1], // 3
    [0, 1, 1, 1, 0, 1, 0], // 4
    [1, 1, 0, 1, 0, 1, 1], // 5
    [1, 1, 0, 1, 1, 1, 1], // 6
    [1, 0, 1, 0, 0, 1, 0], // 7
    [1, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 0, 1, 1],  // 9
    [0, 0, 0, 0, 0, 0, 0]  // none
  ]

  let currentNumber

  $: {
    if(digit == "!"){
      currentNumber = number[10]
    }else{
      currentNumber = number[parseInt(digit)]
    }
  }

  </script>

  <svg
    class="digital-digit"
    viewBox="0 0 16 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(-2,-38)">
      <path
        class:active={currentNumber[6]}
        d="m 4,69 3,-3 h 6 l 3,3 c 0,0 -1,1 -3,1 H 7 C 5,70 4,69 4,69 Z" />
      <path
        class:active={currentNumber[5]}
        d="m 17,55 -3,2 v 8 l 3,3 c 0,0 1,-1 1,-3 v -7 c 0,-2 -1,-3 -1,-3 z" />
      <path
        class:active={currentNumber[4]}
        d="m 3,55 3,2 v 8 L 3,68 C 3,68 2,67 2,65 v -7 c 0,-2 1,-3 1,-3 z" />
      <path
        class:active={currentNumber[3]}
        d="m 7,52 c 2,0 4,0 6,0 1,0.6 2,1.3 3,2 -1,0.6 -2,1.3 -3,2 -2,0 -4,0 -6,0 C 6,55.3 5,54.6 4,54 5,53.3 6,52.6 7,52 Z" />
      <path
        class:active={currentNumber[2]}
        d="m 17,40 -3,3 v 8 l 3,2 c 0,0 1,-1 1,-3 v -7 c 0,-2 -1,-3 -1,-3 z" />
      <path
        class:active={currentNumber[1]}
        d="m 3,40 3,3 v 8 L 3,53 C 3,53 2,52 2,50 v -7 c 0,-2 1,-3 1,-3 z" />
      <path
        class:active={currentNumber[0]}
        d="m 4,39 3,3 h 6 l 3,-3 c 0,0 -1,-1 -3,-1 H 7 c -2,0 -3,1 -3,1 z" />
    </g>
  </svg>


  <style>
    svg{
      grid-row: 1;
    }
    path{
      opacity: 0.125;
      transition: all 0.3s ease-out;
    }
    path.active{
      opacity: 1;
    }
    .digital-digit{
      width: 100%;
    }
  </style>
