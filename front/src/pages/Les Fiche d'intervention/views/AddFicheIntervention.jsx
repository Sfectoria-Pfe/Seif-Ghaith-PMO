import React from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";

export default function AddFicheIentervention() {
  return (
    <div>
      <h5
        style={{ fontSize: 24, fontFamily: "sans-serif", fontWeight: "bold" }}
      >
        Fiche d'intervention
      </h5>
      <div class="flex gap-2 justify-center">
        <div>
          <p className="ptext">nom de client</p>
          <Input label="nom de client" name="nomClient"></Input>
        </div>
        <div>
          <p className="ptext">numero de serie</p>
          <Input label="numero de serie" name="numSerie" />
        </div>
      </div>
      <div class="flex gap-2 justify-center">
        <div>
          <p className="ptext">nom de technicien</p>
          <Input label="nom de technicien" name="nomTech" />
        </div>
        <div>
          <p className="ptext">phone number</p>
          <Input label="phone number" name="number" />
        </div>
      </div>

      <div class="flex gap-2 justify-center">
        <div>
          <p className="ptext">nom de machine</p>
          <Input label="nom de machine" name="nomMachine" />
        </div>
        <div>
          <p className="ptext">Rapport</p>
          <div className="w-96">
            <Textarea label="rapport" name="rapport" />
          </div>
        </div>
      </div>
      <div class=" flex gap-2 justify-center">
        <div>
          <p className="ptext">Observation</p>

          <div className="w-96">
            <Textarea label="observation" name="observation" />
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <Button size="md">ajouter</Button>
      </div>
    </div>
  );
}
