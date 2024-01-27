const skill1 = document.querySelector('.ability #imgp');
const skill2 = document.querySelector('.ability #imgq');
const skill3 = document.querySelector('.ability #imgw');
const skill4 = document.querySelector('.ability #imge');
const skill5 = document.querySelector('.ability #imgr');
const video = document.getElementById('video-skills')
const skillName = document.getElementById('skill-name')
const skillDescription = document.getElementById('skill-description')

const skills = {
  'P': {
    name: 'MOONSILVER BLADE',
    description: 'Every third strike cleaves nearby enemies for an additional magic damage. After casting a spell, Diana gains Attack Speed for her next 3 attacks.',
    videoSrc: '/assets/video/video-p.webm'
  },
  'Q': {
    name: 'CRESCENT STRIKE',
    description: 'Unleashes a bolt of lunar energy in an arc dealing magic damage. Afflicts enemies struck with Moonlight, revealing them if they are not stealthed for 3 seconds.',
    videoSrc: '/assets/video/video-q.webm'
  },
  'W': {
    name: 'PALE CASCADE',
    description: 'Diana creates three orbiting spheres that detonate on contact with enemies to deal damage in an area. She also gains a temporary shield that absorbs damage. If her third sphere detonates, the shield gains additional strength.',
    videoSrc: '/assets/video/video-w.webm'
  },
  'E': {
    name: 'LUNAR RUSH',
    description: 'Becomes the living embodiment of the vengeful moon, dashing to an enemy and dealing magic damage. Lunar Rush has no cooldown when used to dash to an enemy afflicted with Moonlight. All other enemies will have the Moonlight debuff removed regardless of whether they were the target of Lunar Rush.',
    videoSrc: '/assets/video/video-e.webm'
  },
  'R': {
    name: 'MOONFALL',
    description: 'Diana reveals and draws in all nearby enemies and slows them. If Diana pulls in one or more enemy champions, the moonlight crashes down onto her after a short delay, dealing magic damage in an area around her, increased for each target beyond the first pulled.',
    videoSrc: '/assets/video/video-r.webm'
  }
};

function changeSkill(skillKey) {
  const skill = skills[skillKey];
  skillName.innerText = `${skillKey} - ${skill.name}`;
  skillDescription.innerText = skill.description;
  video.src = skill.videoSrc;
}

skill1.addEventListener('click', () => changeSkill('P'));
skill2.addEventListener('click', () => changeSkill('Q'));
skill3.addEventListener('click', () => changeSkill('W'));
skill4.addEventListener('click', () => changeSkill('E'));
skill5.addEventListener('click', () => changeSkill('R'));




const elements = document.querySelectorAll('.hidden')


const myObserver = new IntersectionObserver( (entries) => {
  entries.forEach( (entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})
   


elements.forEach( (element) => myObserver.observe(element))

