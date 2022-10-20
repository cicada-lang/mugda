(import "./Nat.mu" Nat zero)

;; `Stream` is an example of a coinductive type.
;; Coinductive types are not required to be well-founded,
;; i.e. their inhabitants do not need to have finite height.

;; For writing simple examples, we only define `Stream` of `Nat`.

;; There are no `Stream` objects of finite height.

(codata Stream Type
  [cons (-> Nat Stream Stream)])

(fn zeroes Stream
  [(zeroes) (cons zero zeroes)])

(fn head (-> Stream Nat)
  [((cons x xs)) x])
