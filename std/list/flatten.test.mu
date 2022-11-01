(import "../list/index.mu" List null cons flatten)
(import "../nat/index.mu" Nat zero)

(define two-zeros (List Nat)
  (cons Nat zero (cons Nat zero (null Nat))))

(flatten Nat (null (List Nat)))
(flatten Nat (cons (List Nat) two-zeros
                   (null (List Nat))))
(flatten Nat (cons (List Nat) two-zeros
                   (cons (List Nat) two-zeros
                         (null (List Nat)))))
(flatten Nat (cons (List Nat) two-zeros
                   (cons (List Nat) two-zeros
                         (cons (List Nat) two-zeros
                               (null (List Nat))))))
