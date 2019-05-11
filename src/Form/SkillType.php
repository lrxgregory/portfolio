<?php

namespace App\Form;

use App\Entity\Skill;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class SkillType extends AbstractType
{
    public function getConfiguration($label, $placeholder)
    {
        return [
            'label' => $label,
            'attr' => [
                'placeholder' => $placeholder
            ]
        ];
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                'competence', 
                TextType::class, 
                $this->getConfiguration("Titre de la compétence", "Ex : Responsive Design"))
            ->add(
                'competenceDetails',
                TextType::class,
                $this->getConfiguration("Détails de la compétences", "Ex : HTML CSS Bootstrap"))
            ->add(
                'logo',
                TextType::class, 
                $this->getConfiguration("Image qui illustre le titre", "Logo"))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Skill::class,
        ]);
    }
}
