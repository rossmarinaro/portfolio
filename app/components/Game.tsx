'use client'

import "@babylonjs/loaders";
import "@babylonjs/loaders/glTF";

import { useRef, useEffect, useState } from 'react';
import * as BABYLON from "@babylonjs/core";


export default function Game() {

  const [ canvasWidth, setCanvasWidth ] = useState(0);
  const [ canvasHeight, setCanvasHeight ] = useState(0);
  const canvasRef = useRef(null);

  //load canvas on mount

  useEffect(() => {

    const handleWheel = (event: Event) => event.preventDefault();
    const handleResize = () => {
        setCanvasWidth(innerWidth);
        setCanvasHeight(400);
    };

    handleResize();

    window.addEventListener("resize", handleResize, false);

    const canvas = canvasRef.current;
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    if (canvas)
        (canvas as HTMLCanvasElement).addEventListener('wheel', handleWheel, { passive: false});

    (async () => {

        const sushi = await BABYLON.LoadAssetContainerAsync(process.env.NODE_ENV === 'production' ? "./ikura.glb" : "../../ikura.glb", scene);

        sushi.materials.forEach((material: BABYLON.Material) => scene.addMaterial(material));
        sushi.meshes.forEach((mesh: BABYLON.AbstractMesh) => {           
            if (mesh.geometry) 
                scene.addMesh(mesh);
        });

        const directionalLight = new BABYLON.DirectionalLight("directionLight", new BABYLON.Vector3(33, -60, 33), scene);
        directionalLight.intensity = 2;
    
        const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, 1, 70, BABYLON.Vector3.Zero(), scene);

        camera.lowerAlphaLimit = -0.1;
        camera.upperAlphaLimit = Math.PI + 0.1;
        camera.lowerBetaLimit = 0.01;
        camera.upperBetaLimit = Math.PI / 2 - 0.1;
        camera.lowerRadiusLimit = 2.5;
        camera.upperRadiusLimit = 5;
        camera.wheelPrecision = 15;
        
        camera.setTarget(new BABYLON.Vector3(0, 1, 0));
        camera.setPosition(new BABYLON.Vector3(0, 25, -50));
        camera.attachControl(canvas, true, true);

        scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

        engine.runRenderLoop(() => scene.render());

        return () => {
            engine.dispose();
            scene.dispose();
            window.removeEventListener("resize", handleResize);

            if (canvas)
                (canvas as HTMLCanvasElement).removeEventListener('wheel', handleWheel);
        };
    })();
  }, []);

   return <canvas className="mt-[4%] mb-[2%] outline-none" ref={ canvasRef } width={ canvasWidth } height={ canvasHeight } /> 

};



