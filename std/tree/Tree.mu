(import "../list/index.mu" List)

;; A leaf is a node with an empty list of successors.

;; In `node`, the recursive argument `(Tree A)` appears as a parameter to `List`.
;; This will be allowed because the parameter of `List` is strictly positive.

(data Tree ([+ A Type]) ()
  (node ([value A]
         [children (List (Tree A))])
        (Tree A)))
