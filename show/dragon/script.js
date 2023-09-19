const anne = {
  '000.jpeg': 'Anne Öhrling Dersen',
  '001.jpeg': 'Pre-agricultural Fitness',
  '002.jpeg': 'Potpunk',
  '003.jpeg': 'Anne Öhrling Dersen'
};

const idei = {
  '001.jpeg': 'Yoshihiko Idei',
  '002.jpeg': 'Yoshihiko Idei',
  '003.jpeg': 'Yoshihiko Idei',
  '004.jpeg': 'Yoshihiko Idei',
  '005.jpeg': 'Yoshihiko Idei',
  '006.jpeg': 'Yoshihiko Idei',
  '007.jpeg': 'Yoshihiko Idei'
};

const jon = {
  '001.jpeg': 'Jon Vaughn',
  '002.jpeg': 'Jon Vaughn',
  '003.jpeg': 'Jon Vaughn',
  '004.jpeg': 'Jon Vaughn',
  '005.jpeg': 'Jon Vaughn',
  '006.jpeg': 'Jon Vaughn'
};

const minamida = {
  '001.jpeg': 'Shingo Minamida',
  '002.jpeg': 'Shingo Minamida',
  '003.jpeg': 'Shingo Minamida',
  '004.jpeg': 'Shingo Minamida',
  '005.jpeg': 'Shingo Minamida',
  '006.jpeg': 'Shingo Minamida',
  '007.jpeg': 'Shingo Minamida'
};

const ohiana = {
  '001.jpeg': 'Ohiana',
  '002.jpeg': 'Ohiana',
  '003.jpeg': 'Ohiana',
  '004.jpeg': 'Ohiana'
};

const tokiyoshi = {
  '001.jpeg': 'Akina Tokiyoshi',
  '002.jpeg': 'Akina Tokiyoshi',
  '003.jpeg': 'Akina Tokiyoshi',
  '004.jpeg': 'Akina Tokiyoshi',
  '005.jpeg': 'Akina Tokiyoshi',
  '006.jpeg': 'Akina Tokiyoshi',
  '007.jpeg': 'Akina Tokiyoshi',
  '008.jpeg': 'Akina Tokiyoshi',
  '009.jpeg': 'Akina Tokiyoshi'
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
