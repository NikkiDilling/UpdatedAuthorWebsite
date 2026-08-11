import dictionary from './dictionary.json';
import classes from './../../../css/PoM.module.scss';

export default function DictionaryPage() {

    
    return (
        <div className={classes.dictionaryContainer} >

            <h3>Demutriir Dictionary</h3>

            <div style={{width:"60%", margin:"0 auto"}}>
                {Object.keys(dictionary).sort().map((key, index) => {
                    const k = key as keyof typeof dictionary;
                    return (
                        <div key={index} className={classes.dictionaryItem}>
                            <div>{key}</div>
                            <div>{dictionary[k]}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}