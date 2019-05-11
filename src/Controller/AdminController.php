<?php

namespace App\Controller;

use App\Entity\Work;
use App\Entity\Skill;
use App\Form\WorkType;
use App\Form\SkillType;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin")
     * @IsGranted("ROLE_ADMIN")
     */
    public function index(Request $request, ObjectManager $manager)
    {   
        $skill = new Skill();

        $form = $this->createForm(SkillType::class, $skill);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $manager->persist($skill);
            $manager->flush();

            $this->addFlash(
                'success',
                "Compétence ajoutée au portfolio"
            );

            return $this->redirectToRoute('home');
        }
        $work = new Work();

        $workform = $this->createForm(WorkType::class, $work);

        $workform->handleRequest($request);

        if ($workform->isSubmitted() && $workform->isValid()) {
            $manager->persist($work);
            $manager->flush();

            $this->addFlash(
                'success',
                "Projet ajouté au portfolio"
            );

            return $this->redirectToRoute('home');
        }

        return $this->render('admin/index.html.twig', [
            'form' => $form->createView(),
            'workform' => $workform->createView()
        ]);
    }
}
