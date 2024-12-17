import React, {useEffect, useRef} from "react";
import {motion, useInView, useAnimation} from "framer-motion";

const childrenVariant = {
    visible: { scale: 1 },
    hidden: { scale: 0 }
};

interface Props {
    children: JSX.Element;
    width?: "100%";
}

export const Pop = ({children, width}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        const animateInView = async () => {
            if (isInView) {
            await mainControls.start("visible");
            }
        };
        animateInView();
        }, [isInView, mainControls]);


    return (
        <div ref={ref}
            style={{position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={childrenVariant}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5, delay: 1}}>
                    {children}
            </motion.div>
        </div>
    )
}
