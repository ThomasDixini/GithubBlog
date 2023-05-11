import { useParams } from 'react-router-dom'

export function Repositorie(){
    const { repo } = useParams()
    return (
        <main>
            <section>
                <header>
                    <a href="#"> Voltar </a>
                    <a href="#"> VER NO GITHUB </a>
                </header>
                <strong> JavaScript data types and data structures </strong>
                <footer>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </footer>
            </section>
            <section>
                <dl>
                    <dt> Dynamic Js </dt>
                    <dd> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quo officiis rerum aliquid iste ex dolores veritatis a
                        lias quod nihil repellat quaerat quia, minus consectetur! 
                        Numquam saepe quaerat ipsum quam modi!
                    </dd>
                </dl>
                <pre>
                       asfas
                </pre>
            </section>  
        </main>
    );
}