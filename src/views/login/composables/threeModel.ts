import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import type { Ref } from "vue";
import { onMounted } from "vue";
import Stats from "three/examples/jsm/libs/stats.module";

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
    camera.position.set(0, 0, 40);// 设置相机位置

    renderer.setSize(400, 400);
    renderer.setClearAlpha(0);

    ref.value.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    scene.add(box);
    function animate() {
      stats.update();
      requestAnimationFrame(animate);

      box.rotation.x += 0.01;
      box.rotation.y += 0.01;
      renderer.render(scene, camera);
      const { width, height } = ref.value.getBoundingClientRect();
      window.onresize = function () {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
    }
    animate();
  }

  onMounted(initThree);
}
