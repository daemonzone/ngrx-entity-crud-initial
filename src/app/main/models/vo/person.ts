export class Person {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: Person) => string = item => item.id;

  public firsname:string = undefined;
  public lastname:string = undefined;
  public emaile:string = undefined;
  public phone:string = undefined;
}
