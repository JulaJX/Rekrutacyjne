import ArrowIcon from '../../assets/icon-arrow.svg?react'

const HomeModule4Question = ({callback,num,num2,question}) => {
    return ( 
    <div className="question" onClick={()=> callback(num2)}>
        <span>{question}</span>
        <ArrowIcon className={num==num2 ? 'selected' : '' } />
        <p className={num==num2 ? 'scroll' : '' }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quaerat delectus ipsam aspernatur dolorum deserunt suscipit, blanditiis, soluta necessitatibus quam
            tempore voluptate ab neque doloribus, corrupti iusto error assumenda sunt!</p>
    </div>
     );
}
 
export default HomeModule4Question;