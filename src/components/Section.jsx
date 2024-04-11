import Card from './Card';
import iconCalculator from '../assets/icon-calculator.svg';
import iconKarma from '../assets/icon-karma.svg';
import iconSupervisor from '../assets/icon-supervisor.svg';
import iconTeamBuilder from '../assets/icon-team-builder.svg';

export default function Section() {
  const cardInfo = [
    {
      title: 'Supervisor',
      description: 'Monitors activity to identify project roadblocks',
      img: iconSupervisor,
      color: 'border-cyan-400',
    },
    {
      title: 'Team Builder',
      description:
        'Scans our talent network to create the optimal team for your project',
      img: iconTeamBuilder,
      color: 'border-red-400',
    },
    {
      title: 'Karma',
      description: 'Regularly evaluates our talent to ensure quality',
      img: iconKarma,
      color: 'border-orange-400',
    },
    {
      title: 'Calculator',
      description:
        'Uses data from past projects to provide better delivery estimates',
      img: iconCalculator,
      color: 'border-blue-400',
    },
  ];
  return (
    <div className='px-10 py-16'>
      <h1 className='text-2xl text-center mb-6 font-extralight tracking-wide'>
        Reliable, efficient delivery{' '}
        <span className='font-semibold'>Powered by Technology</span>
      </h1>
      <p className='mb-10 text-center font-light text-gray-400'>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      {cardInfo.map((info, index) => (
        <Card {...info} key={index} />
      ))}
    </div>
  );
}
