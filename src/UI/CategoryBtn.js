import React from 'react';
import "./CategoryBtn.css"

function CategoryBtn({category}) {
    return (
    <div>
        <div className="sex">
            <button className="female">
                female
            </button>
            <button className="male">
                male
            </button>
        </div>

        <div className="category">
            {category.map((c) => 
                <button className="category_iteam" key={Math.random()}>
                    {c.body}
                </button>
            )}
        </div>
    </div>
    );
}

export default CategoryBtn;