(import "./List.mu" List)

;; A leaf is a node with an empty list of successors.

;; In `node`, the recursive argument `(Tree A)` appears as a parameter to `List`.
;; This will be allowed because the parameter of `List` is strictly positive.

(data Tree (Pi ([+ A Type]) Type)
  [node (Pi ([A Type]) (-> A (List (Tree A)) (Tree A)))])
