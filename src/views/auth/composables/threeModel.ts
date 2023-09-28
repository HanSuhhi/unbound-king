import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import type { Ref } from "vue";
import { onMounted } from "vue";
import Stats from "three/examples/jsm/libs/stats.module";
import { WindowEnum } from "@/enums/window.enum";

function adjustModelSize(renderer: WebGLRenderer) {
  if (innerWidth <= WindowEnum.Divide) renderer.setSize(0, 0);
  else if (innerWidth <= WindowEnum.SlightlyBigger)renderer.setSize(innerWidth / 3.5, innerWidth / 3.5);
  else renderer.setSize(innerWidth / 4, innerWidth / 4);
}

export function useThreeModel(ref: Ref<HTMLElement>) {
  const scene = new Scene();
  const renderer = new WebGLRenderer();
  const camera = new PerspectiveCamera(50, 1);
  const boxgeometry = new BoxGeometry(20, 20, 20);
  const stats = new Stats();
  const boxMaterial = new MeshBasicMaterial({
    color: 0x77777FF,
    wireframe: true
  });
  const box = new Mesh(boxgeometry, boxMaterial);

  function initThree() {
    camera.position.set(0, 0, 40);

    adjustModelSize(renderer);

    renderer.setClearAlpha(0);

    ref.value.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    scene.add(box);
    function animate() {
      stats.update();
      requestAnimationFrame(animate);

      box.rotation.x += 0.005;
      box.rotation.y += 0.005;
      renderer.render(scene, camera);
      window.onresize = adjustModelSize.bind(null, renderer);
    }
    animate();
  }

  onMounted(initThree);
}
