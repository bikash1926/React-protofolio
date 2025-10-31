import React from 'react'
import PropTypes from 'prop-types';
const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3  hover:bg-zinc-800  transition-colors 0  group   ' + classes}>
      <figure className="skill-card__figure flex items-center bg-zinc-700/50 rounded-lg overflow-hidden w-12
      h-12 p-2 group-hover:bg-zinc-900 transition-colors pl-2 ">
        <img src={imgSrc} 
        alt={label} 
        height={32} 
        width={32} 
        />
      </figure>
      <div className="">
        <h3 className='text-zinc-100'>{label}</h3>
        <p className='text-zinc-400 text-sm'>{desc}</p>
      </div>
    </div>
  )
}
SkillCard.propTypes = {
    imgSrc: PropTypes.string, // No longer required since it has a default value
    label: PropTypes.string,
    desc: PropTypes.string,
    classes: PropTypes.string,
  };
 

export default SkillCard;
