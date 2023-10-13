'use client'
import { ItemsProps } from "../../interfaces/Items.props";
import { FC, useState } from "react";
import Item from "./Item";
import Plan from "./Plan";

const Items: FC<ItemsProps> = ({
  arrayItems
}) => {

  const [selected, setSelected] = useState<number>(0);

  const changeSelect = (index: number) => {
    // if (index === selected) {
    //   setSelected(null);
    // } else {
    //   setSelected(index);
    // };
    setSelected(index);
  };

  return (
    <section>
      <div className="flex mb-16 max-lg:flex-col lg:flex-wrap lg:items-center lg:justify-center lg:mx-40">
        {
          arrayItems.map((item, index) => {
            const {
              title,
              message,
              planes
            } = item;

            return (
              <Item
                key={ index }
                onClick={ () => changeSelect(index) }
                selected={ selected === index }
                title={ title }
                message={ message }
                planes={ planes }
              />
            )
          })
        }
      </div>
      <div>
        {
          arrayItems[selected].message &&
          <h5 className="text-center text-gray-600 mb-12">
            {
              arrayItems[selected].message?.strong &&
              <strong>{ arrayItems[selected].message?.strong } 
             
              </strong> 
            } { arrayItems[selected].message?.text }
            <strong>
            <br />
              { arrayItems[selected].message?.strong2 }
            </strong>
          </h5>
        }
        <div
          className={`flex flex-wrap justify-center items-start ${ arrayItems[selected].ifGrid ? 'grid' : '' } gap-10 mx-20 mt-4 mb-12 max-lg:hidden`}
          style={{
            gridTemplateColumns: `repeat(${ arrayItems[selected].gridCols }, 1fr)`,
            gridTemplateRows: `repeat(${ arrayItems[selected].gridRows }, 1fr)`
          }}
        >
          {
            arrayItems[selected].planes.map((item, index) => {
              const {
                className,
                noHeader,
                mobileFooter,
                src,
                alt,
                width,
                height,
                dscto,
                promo,
                price,
                regular,
                plan,
                plan2,
                classNamePlan,
                extraPlan,
                data,
                details
              } = item;

              return (
                <Plan
                  key={ index }
                  className={ className }
                  noHeader={ noHeader }
                  mobileFooter={ mobileFooter }
                  src={ src }
                  alt={ alt }
                  width={ width }
                  height={ height }
                  dscto={ dscto }
                  promo={ promo }
                  price={ price }
                  regular={ regular }
                  plan={ plan }
                  plan2={ plan2 }
                  classNamePlan={ classNamePlan }
                  extraPlan={ extraPlan }
                  data={ data }
                  details={ details }
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Items