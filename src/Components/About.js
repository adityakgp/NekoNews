import React from 'react'

export default function About(props) {
    return (
        <div className="container">
            <h1 className="my-3" >About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Lorem, ipsum dolor.</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex delectus autem iure aliquam, rem quos vero libero alias nobis numquam voluptatibus sed, eos voluptatem sapiente cupiditate officiis velit sequi accusamus. Quis tenetur unde hic, corporis doloremque voluptatum nemo odit, obcaecati repudiandae nobis laboriosam debitis earum pariatur, ipsa sint! Ipsam, suscipit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Lorem, ipsum dolor. </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, officiis. Aliquam commodi alias delectus temporibus, praesentium ut repellendus expedita esse blanditiis sint, quidem magnam tenetur? Eaque consequuntur officiis nemo commodi nobis fugiat amet sequi cum ipsa, eveniet debitis neque suscipit ab omnis deserunt qui quo! Placeat culpa tempora iusto blanditiis!
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Lorem, ipsum dolor.</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure beatae mollitia nostrum ipsam in facere a nobis, vel omnis architecto laudantium ipsa cum eligendi cumque! Veniam neque praesentium deleniti dolores, sint dolor commodi. Ducimus natus quo sequi magni ab ut nisi voluptas nihil excepturi. Quis accusamus tempora doloremque maxime rem.
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
