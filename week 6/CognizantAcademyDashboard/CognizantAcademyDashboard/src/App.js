import CohortDetails from './Components/CohortDetails';
const cohorts=[
{name:'React Fundamentals',status:'ongoing',trainer:'Anita',strength:32},
{name:'Java FSE',status:'completed',trainer:'Rahul',strength:28},
{name:'Spring Boot',status:'ongoing',trainer:'Meera',strength:30},
{name:'Microservices',status:'completed',trainer:'Kiran',strength:26}
];
export default function App(){
 return <div>{cohorts.map((c,i)=><CohortDetails key={i} cohort={c}/>)}</div>
}
