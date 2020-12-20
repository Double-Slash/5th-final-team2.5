import { Ref, useRef, useEffect } from 'react';

/**
 * reference: https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd
 * forwardRef안에서 useRef을 사용하기 위해
 * [ref]의 참조값을 targetRef를 가리키게하고 반환한다.
 */

function useCombinedRefs(...refs: Ref<HTMLElement>[]) {
  const targetRef = useRef(null);

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') ref(targetRef.current);
      else (ref.current as HTMLElement) = targetRef.current;
    });
  }, [refs]);

  return targetRef;
}

export default useCombinedRefs;
