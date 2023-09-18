const anne = {
  '000.jpeg': 'Anne Öhrling Dersen',
  '001.jpeg': 'Pre-agricultural Fitness',
  '002.jpeg': 'Potpunk',
  '003.jpeg': 'アン・オーリング・デルセン'
};

const idei = {
  '001.jpeg': 'Pre-agricultural Fitness',
  '002.jpeg': 'Potpunk',
  '003.jpeg': 'アン・オーリング・デルセン',
  '004.jpeg': 'アン・オーリング・デルセン',
  '005.jpeg': 'アン・オーリング・デルセン',
  '006.jpeg': 'アン・オーリング・デルセン',
  '007.jpeg': 'Anne Öhrling Dersen'
};

const jon = {
  '001.jpeg': 'Pre-agricultural Fitness',
  '002.jpeg': 'Potpunk',
  '003.jpeg': 'アン・オーリング・デルセン',
  '004.jpeg': 'アン・オーリング・デルセン',
  '005.jpeg': 'アン・オーリング・デルセン',
  '006.jpeg': 'アン・オーリング・デルセン'
};

const minamida = {
  '001.jpeg': 'Pre-agricultural Fitness',
  '002.jpeg': 'Potpunk',
  '003.jpeg': 'アン・オーリング・デルセン',
  '004.jpeg': 'アン・オーリング・デルセン',
  '005.jpeg': 'アン・オーリング・デルセン',
  '006.jpeg': 'アン・オーリング・デルセン',
  '007.jpeg': 'Anne Öhrling Dersen'
};

const ohiana = {
  '001.jpeg': 'Pre-agricultural Fitness',
  '002.jpeg': 'Potpunk',
  '003.jpeg': 'アン・オーリング・デルセン',
  '004.jpeg': 'アン・オーリング・デルセン'
};

const tokiyoshi = {
  '001.jpeg': 'Pre-agricultural Fitness',
  '002.jpeg': 'Potpunk',
  '003.jpeg': 'アン・オーリング・デルセン',
  '004.jpeg': 'アン・オーリング・デルセン',
  '005.jpeg': 'アン・オーリング・デルセン',
  '006.jpeg': 'アン・オーリング・デルセン',
  '007.jpeg': 'Anne Öhrling Dersen',
  '008.jpeg': 'Anne Öhrling Dersen',
  '009.jpeg': 'Anne Öhrling Dersen'
};

imgCreate(anne, 'anne')
imgCreate(idei, 'idei')
imgCreate(jon, 'jon')
imgCreate(minamida, 'minamida')
imgCreate(ohiana, 'ohiana')
imgCreate(tokiyoshi, 'tokiyoshi')

function imgCreate(name, query = '') {
  let div = document.querySelector(`#${query}`);
  for (let imgEach in name) {
    const img = document.createElement('img');
    img.setAttribute("src", `${query}/${imgEach}`);
    img.setAttribute("alt", name[imgEach]);
    div.appendChild(img);
  }
}
