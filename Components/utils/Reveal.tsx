import React, {useEffect, useRef} from "react";
import {motion, useInView, useAnimation} from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "100%";
}

export const Reveal = ({children, width}: Props) => {
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
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y:0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5, delay: 0.7}}>
                    {children}
            </motion.div>
        </div>
    )
}