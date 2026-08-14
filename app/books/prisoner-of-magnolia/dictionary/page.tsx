import dictionary from './dictionary.json';
import classes from './../../../css/PoM.module.scss';

export default function DictionaryPage() {

    
    return (
        <div className={classes.dictionaryContainer} >

            <h3 className={classes.title}>Demutriir Dictionary</h3>

            <div className={classes.dictionary}>
                {Object.keys(dictionary).sort().map((key, index) => {
                    const k = key as keyof typeof dictionary;
                    return (
                        <div key={index} className={classes.dictionaryItem}>
                            <div>{key}</div>
                            <div style={{textAlign: "right"}}>{dictionary[k]}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}