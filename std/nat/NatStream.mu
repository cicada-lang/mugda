(import "./Nat.mu" Nat zero)

;; `NatStream` is an example of a coinductive type.
;; Coinductive types are not required to be well-founded,
;; i.e. their inhabitants do not need to have finite height.

;; There are no `NatStream` objects of finite height.

(codata NatStream () ()
  [cons ([n Nat] [rest NatStream]) NatStream])

(fn zeroes NatStream
  [() (cons zero zeroes)])

(fn head (-> NatStream Nat)
  [((cons x xs)) x])

(fn tail (-> NatStream Nat)
  [((cons x xs)) xs])

zeroes
(head zeroes)
(head (tail zeroes))
(head (tail (tail zeroes)))
