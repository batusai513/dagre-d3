import intersectEllipse from './intersect-ellipse';

export default function intersectCircle(node, rx, point) {
  return intersectEllipse(node, rx, rx, point);
}
