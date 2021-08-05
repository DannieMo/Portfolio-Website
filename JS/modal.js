const workProjects = [
  {
    title: 'Multi-Post Stories',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent`,
    image: {
      imageUrl: './assets/images/mobile-snapshot.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['Html', 'Ruby on rails', 'Css', 'Github'],
    seeLive: 'index.html',
    sourceUrl: 'https://github.com/DannieMo/Portfolio-Website',
  },
  {
    title: 'Multi-Post Stories',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent`,
    image: {
      imageUrl: './assets/images/mobile-snapshot.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['Html', 'Ruby on rails', 'Css', 'Github'],
    seeLive: 'index.html',
    sourceUrl: 'https://github.com/DannieMo/Portfolio-Website',
  },
  {
    title: 'Multi-Post Stories',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent`,
    image: {
      imageUrl: './assets/images/mobile-snapshot.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['Html', 'Ruby on rails', 'Css', 'Github'],
    seeLive: 'index.html',
    sourceUrl: 'https://github.com/DannieMo/Portfolio-Website',
  },
  {
    title: 'Multi-Post Stories',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essent.`,
    image: {
      imageUrl: './assets/images/mobile-snapshot.png',
      imageAlt: 'Mobile Snapshot',
    },
    technologies: ['Html', 'Ruby on rails', 'Css', 'Github'],
    seeLive: 'index.html',
    sourceUrl: 'https://github.com/DannieMo/Portfolio-Website',
  },
];

function createCard(project) {
  let worksText = `<div class="story-left">
                    <div class="rect"></div>
                    <div class="desc">
                    <h4>${project.title}</h4>
                    <p>
                    ${project.shortDescription}
                    </p>
                    <div class="skills">
                      <p>`;
  for (let i = 0; i < project.technologies.length; i += 1) {
    worksText += `<p class="stack">${project.technologies[i]}</p>`;
  }
  worksText += `</div>
                    <div>
                    <button type="submit" class="project-btn">See Project</button>
                  </div>
                </div>`;
  return worksText;
}

function createModal(project) {
  let worksText = `<section class="modal">
  <div class="modal-menu">
                  <img src="./assets/images/Icon.png" alt="Close" class="modal-close">
                  <h4>${project.title}</h4>
                  <div class="modal-img">
                    <img src="${project.image.imageUrl}" alt="${project.image.imageAlt}">
                  </div>
                  <div class="modal-body">
                    <p>${project.description}</p>
                  </div>
                  <div class="skills stack-used-1">
                  <div>`;
  for (let i = 0; i < project.technologies.length; i += 1) {
    worksText += `<p class="stack>${project.technologies[i]}</p>`;
  }
  worksText += `</div>
                  </div>
                  <div class="modal-btn">
                  <button type="submit" class="modalBtn"><a href="${project.seeLive}">See Live
                    <img src="./assets/images/fileIcon.png" alt="See Live Icon" class="button-img"></a>
                  </button>
                  <button type="submit" class="modalBtn"><a href="${project.sourceUrl}" target="_blank">See Source
                  <img src="./assets/images/github.png" alt="See Source Icon" class="button-img"></a>
                  </button>
                </section>`;

  return worksText;
}

const worksList = document.querySelector('.stories');
const works = document.querySelector('#modal-div');
function insertHtml() {
  const myWorks = Object.keys(workProjects);
  const myWorksLength = Object.keys(workProjects).length;

  for (let i = 0; i < myWorksLength; i += 1) {
    worksList.innerHTML += createCard(workProjects[myWorks[i]], i);
  }

  for (let j = 0; j < myWorksLength; j += 1) {
    works.innerHTML += createModal(workProjects[myWorks[j]], j);
  }
}

worksList.onload = insertHtml();

const mainPage = document.querySelector('#main-page');
const header = document.getElementById('page-header');

document.querySelectorAll('.project-btn').forEach((open) => {
  open.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'block';
    mainPage.style.display = 'none';
    header.style.display = 'none';
  });
});

document.querySelectorAll('.modal-close').forEach((close) => {
  close.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach((item) => {
      item.style.display = 'none';
    });

    mainPage.style.display = 'block';
    header.style.display = 'flex';
  });
});