import React, {useEffect, useRef} from "react";
import {motion, useInView, useAnimation} from "framer-motion";

const childrenVariant = {
    visible: {opacity: 1, scale:1, x:0, transition: {duration:0.5}},
    hidden: {opacity: 0, scale:0, x:200}
};

interface Props {
    children: JSX.Element;
    width?: "100%";
}

export const Reveal2 = ({children, width}: Props) => {
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
