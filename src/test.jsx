import React from "react";
// import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
export const Test = () => {
    return (
        <>
            <div className="h-0">

            </div>
            <div>
                <div className="card border">
                    <Card title={<span className="text-white">TECHNOLOGIES</span>} className="border border-white m-5 p-5 bg-white/10 backdrop-blur-md dark:bg-gray-900/10 dark:backdrop-blur-md">
                        <p className="m-0 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
            </div>
        </>
    )
}